import {
    AgentsView,
    AgentsViewError,
    AgentsViewLoading}
    from "@/modules/agents/ui/views/agents-view"
import { getQueryClient, trpc } from "@/trpc/server";
import {HydrationBoundary, dehydrate} from "@tanstack/react-query";
import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";

const Page = async () => {
  const querryClient = getQueryClient();
  void querryClient.prefetchQuery(trpc.agents.getMany.queryOptions())
  return (
      <HydrationBoundary state={dehydrate(querryClient)}>
          <Suspense fallback={<AgentsViewLoading/>}>
              <ErrorBoundary fallback={<AgentsViewError/>}>
         <AgentsView/>
              </ErrorBoundary>
          </Suspense>
      </HydrationBoundary>
  )
};

export default Page